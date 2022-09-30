// @ts-nocheck
import styles from "./CodeEditor.module.css";
import { useEffect, useRef } from "react";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

type CodeEditorProps = {
  code?: string;
};

function CodeEditor(props: CodeEditorProps) {
  const { code = "" } = props;
  const codeBlockRef = useRef(null);

  useEffect(() => {
    if (codeBlockRef?.current?.children?.length) {
      // codeBlockRef.current?.children?.[0]?.style.height = "14rem";
      let elementRef = codeBlockRef.current.children[0];
      if (elementRef) elementRef["style"]["height"] = "14rem";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeBlockRef?.current]);

  return (
    <div className={"code-block-editor"} ref={codeBlockRef}>
      <CodeBlock
        language={"php"}
        text={code}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        style={{ height: "14rem" }}
      />
    </div>
  );
}

export default CodeEditor;
