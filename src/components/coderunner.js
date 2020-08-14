const codeRunner = function (code='') {
  const systemErr = console.error
  const systemLog = console.log
  let msgs = ''
  console.log = function(...text) {
    text.forEach(e => msgs = msgs +'\n' + String(e))
  }
  console.error = function(...text) {
    text.forEach(e => msgs = msgs + String(e))
  }
  try{
    // eslint-disable-next-line no-eval
    eval(code)
  }
  catch(err){
    msgs += String('\n'+ err)
  }
  console.log = systemLog
  console.error = systemErr
  return msgs
}

export default codeRunner