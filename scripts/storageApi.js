
// Local storage 

function setData(data) {
  localStorage.setItem("todos", JSON.stringify(data))
}

function getData() {
  const data = JSON.parse(localStorage.getItem("todos"))
  if (data) {
    return data
  }
  return []
}
export {setData,getData}