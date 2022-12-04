export function checkFile() {
    return fetch('http://localhost:8000/checkfile/')
      .then(data => data.json())
  }