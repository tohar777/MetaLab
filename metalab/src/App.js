document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.getElementById("Viewer");
    const scriptInput = document.getElementById("script");

    window.Run = function() {
        if (!viewer) {
            alert("Viewer element not found.");
            return;
        }

        if (!scriptInput) {
            alert("Script input element not found.");
            return;
        }

        const scriptContent = scriptInput.value;

        if (!scriptContent) {
            alert("There's no script to run. Please write one.");
            return;
        }

        // Clear the iframe content before adding new script
        const doc = viewer.contentDocument || viewer.contentWindow.document;
        doc.open();
        doc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Viewer</title>
            </head>
            <body>
                <pre style="display: none;"></pre>
                ${scriptContent}
            </body>
            </html>
        `);
        doc.close();
    };
});
