const express = require('express');
const app = express();

const PORT = 3400;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})