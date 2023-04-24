// import React from 'react'
import React, { useEffect } from 'react'
// import { jsPDF } from "jspdf";  jspdf is library to create pdf

import { fabric } from 'fabric'

const Canvas = () => {
  // using hooks as compnentdidupdate, only once,
  useEffect(() => {
    const canvas = new fabric.Canvas('my-fabric-canvas', {
      isDrawingMode: true,
      color: 'red',
    })

    //createing circle
    const circle = new fabric.Circle({
      radius: 5,
      fill: 'blue',
      top: 10,
      left: 1 + 390,
    })
    // creating text box
    const textbox = new fabric.Textbox('You can start to draw', {
      fontSize: 20,
      left: 15 + 400,
      top: 5,
      width: 200,
    })

    //adding shapes to canvas
    canvas.add(textbox)
    canvas.add(circle)
  }, [])

  //handling screen-shot
  // const handleScreenshot = () => {
  //   const doc = new jsPDF();
  //   doc.text("I Should work on canvas image to pdf converter", 10, 10);
  //   doc.save("a4.pdf");
  //   console.log("screen");
  // };

  return (
    <div className='App'>
      <center>
        <canvas
          id='my-fabric-canvas'
          className='color'
          width='1000'
          height='550'
        />
        {/* <button
          className="btn btn-primary mt-2"
          onClick={() => handleScreenshot()}>
          Take a screenshot and download
        </button> */}
      </center>
    </div>
  )
}

export default Canvas
