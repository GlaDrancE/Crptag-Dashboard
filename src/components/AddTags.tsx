import React, { useState } from "react";
import axios from "axios";
import {
  FaLock,
  FaFileArrowDown,
  FaFileArrowUp,
  FaStore,
  FaEllipsis,
} from "react-icons/fa6";
import LayoutComponent from "./Layout";

const Modal: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <p>{message}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const LoadingModal: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  );
};

const BatchAddTag: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      processFile(selectedFile);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result;
      if (typeof text === "string") {
        const data = parseCSV(text);
        const tagsData = data
          .filter((item) => item.UID !== undefined && item.UID !== "")
          .map((item) => ({
            uid: item.UID,
            readcnt: item["Read Count"],
            filedata: item["File Data"],
          }));
        try {
          setLoading(true);
          await axios.post("https://api.cryptag.in/v1/add-tag", tagsData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          setModalMessage("Tags added successfully");
          clearInputs();
        } catch (error) {
          setModalMessage("Error adding tags");
        } finally {
          setLoading(false);
        }
      }
    };
    reader.readAsText(file);
  };

  const parseCSV = (text: string) => {
    const lines = text.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      const obj: { [key: string]: string } = {};
      const currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    return result;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../template.csv";
    link.download = "tag-template.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearInputs = () => {
    setFile(null);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <LoadingModal loading={loading} />
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage("")} />
      )}
      <div className="flex justify-between">
        <div className="text-lg font-semibold mb-4">Batch Add Tag</div>
        <FaEllipsis onClick={clearInputs} className="cursor-pointer" />
      </div>
      <div className="flex items-center mb-4 justify-between rounded-md">
        <select className="border p-2 mr-4 w-[25%] rounded-md">
          <option value="">PICC + encFileData + CMAC (203)</option>
        </select>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="csvUpload"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-[40%] hover:bg-green-700"
          onClick={() => document.getElementById("csvUpload")?.click()}
        >
          <div className="flex items-center gap-5">
            <FaFileArrowUp />
            <span>Upload CSV</span>
          </div>
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={handleDownload}
        >
          <div className="flex items-center gap-5">
            <FaFileArrowDown />
            <span>Download CSV Template</span>
          </div>
        </button>
      </div>
    </div>
  );
};

const ManualAddTag: React.FC = () => {
  const [uid, setUid] = useState("");
  const [readCount, setReadCount] = useState("");
  const [fileData, setFileData] = useState("");
  const [keys, setKeys] = useState({
    key0: "",
    key1: "",
    key2: "",
    key3: "",
    key4: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleAddTag = async () => {
    if (!uid || !readCount || !fileData) {
      setModalMessage("Please enter UID, Read Count, and File Data");
      return;
    }

    const data = {
      uid,
      readcnt: readCount,
      filedata: fileData,
    };
    const dataList = [data];
    try {
      setLoading(true);
      await axios.post("https://api.cryptag.in/v1/add-tag", dataList, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setModalMessage("Tag added successfully");
      clearInputs();
    } catch (error) {
      setModalMessage("Error adding tag");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateKeys = async () => {
    if (!uid) {
      setModalMessage("Please enter UID");
      return;
    }
    const serialNumber = "MAS2024A1010101N01001";
    try {
      const response = await axios.get(
        `https://api.cryptag.in/v1/generate-keys/${serialNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setKeys(response.data);
      setModalMessage("Keys generated successfully");
    } catch (error) {
      setModalMessage("Error generating keys");
    }
  };

  const clearInputs = () => {
    setUid("");
    setReadCount("");
    setFileData("");
    setKeys({
      key0: "",
      key1: "",
      key2: "",
      key3: "",
      key4: "",
    });
  };

  return (
    <div className="p-4 border rounded shadow-md mt-6 bg-white">
      <LoadingModal loading={loading} />
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage("")} />
      )}
      <div className="flex justify-between">
        <div className="text-lg font-semibold mb-4">Manual Add</div>
        <FaEllipsis onClick={clearInputs} className="cursor-pointer" />
      </div>
      <div className="flex mb-4">
        <div className="grow">
          <div className="flex flex-col">
            <input
              className="border p-2 mr-4 grow mb-2 rounded-md"
              placeholder="UID"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            />
            <div className="flex">
              <input
                className="rounded-md border p-2 mr-4 flex-grow mb-2"
                placeholder="Generated Key 0"
                value={keys.key0}
                readOnly
              />
              <input
                className="rounded-md border p-2 mr-4 flex-grow mb-2"
                placeholder="Generated Key 1"
                value={keys.key1}
                readOnly
              />
              <input
                className="rounded-md border p-2 mr-4 flex-grow mb-2"
                placeholder="Generated Key 2"
                value={keys.key2}
                readOnly
              />
              <input
                className="rounded-md border p-2 mr-4 flex-grow mb-2"
                placeholder="Generated Key 3"
                value={keys.key3}
                readOnly
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-md mb-2 mr-4 hover:bg-orange-700"
                onClick={handleGenerateKeys}
              >
                <div className="flex gap-2 items-center">
                  <FaLock />
                  <span>Auto Generate</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="grow">
          <div className="grow flex justify-between">
            <input
              className="border p-2 mr-4 flex-grow mb-2 rounded-md"
              placeholder="Read Count"
              value={readCount}
              onChange={(e) => setReadCount(e.target.value)}
            />
            <input
              className="border p-2 flex-grow mb-2 rounded-md"
              placeholder="File Data"
              value={fileData}
              onChange={(e) => setFileData(e.target.value)}
            />
          </div>
          <div className="grow">
            <select className="border p-2 mr-4 flex-grow mb-2 w-full rounded-md">
              <option value="">PICC + encFileData + CMAC (203)</option>
            </select>
          </div>
          <div className="grow">
            <select className="border p-2 mr-4 flex-grow mb-2 w-full rounded-md">
              <option value="">Master Key (Key 0)</option>
            </select>
          </div>
          <div className="flex justify-end w-full">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2 hover:bg-blue-700"
              onClick={handleAddTag}
              disabled={loading}
            >
              <div className="flex gap-5 items-center">
                <FaStore />
                <span>{loading ? "Processing..." : "Add Tag"}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddTags: React.FC = () => {
  return (
    <LayoutComponent title="Tag Management" subtitle="Add Tags">
      <BatchAddTag />
      <ManualAddTag />
    </LayoutComponent>
  );
};

export default AddTags;
