import React, { useRef, useEffect } from "react";
import CloudPdfViewer from "@cloudpdf/viewer";
import "./Curriculo.css"
export default function Curriculo() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "3b063369-ef37-493d-be43-3b557964d5dd",
        darkMode: true
      },
      viewer.current
    ).then((instance) => {});
  }, []);

  
  return (
    <div className="app">
      <div className="viewer" ref={viewer}></div>
    </div>
  );
}
