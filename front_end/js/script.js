const fetchPdv = async () => {
    const response = await fetch('http://localhost:3333');
    const pdv = await response.json();
    return pdv;
}

