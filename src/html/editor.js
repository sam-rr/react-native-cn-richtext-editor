const editorHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        html {
            height: 100%;
            width: 100%;
        }
        body {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
            height: 100%;
            margin: 0;
            padding: 2px;
        }
        #editor {
           flex-grow: 1;
        }

        #editor:focus {
          outline: 0px solid transparent;
        }
    </style>
    <title>CN-Editor</title>
</head>
<body>
    <div id="editor" contentEditable>
       
    </div>
</body>
</html>
`;

export default editorHTML;
