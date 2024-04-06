import React, { useEffect, useState } from "react";
import Editor from '@monaco-editor/react';

const BoxEditor = () => {
    const [value, setValue] = useState(`consolve.log("Hello Vinit!")`);

    return (
        <Editor
            height="70vh"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            theme="vs-dark"
            value={value}
            onChange={
                (value) => (setValue(value))
            }



        />
    )
}

export default BoxEditor;