import { useState } from "react";

interface Explorer {
  id: string;
  name: string;
  isFolder: boolean;
  items: Explorer[];
}

interface FolderProps {
  explorer: Explorer;
}

function Folder({ explorer }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: undefined as unknown as boolean,
  });

  const handleNewFolder = (e: any, isFolder: boolean) => {
    e.stopPropagation();
    setIsOpen(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e: any) => {
    if (e.keyCode === 13 && e.target.value) {
      setShowInput({
        visible: false,
        isFolder: undefined as unknown as boolean,
      });
    }
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setIsOpen(!isOpen)}>
          <span>🗂️ {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: isOpen ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className="inputContainer__input"
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;
