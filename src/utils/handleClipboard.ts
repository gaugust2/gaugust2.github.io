async function handleClipboard(email: string) {
    try {
        await navigator.clipboard.writeText(email);
    } catch (err) {
        console.log("Failed to copy email: " + err);
    }
}

export default handleClipboard;