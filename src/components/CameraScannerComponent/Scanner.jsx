import React from "react";
import Quagga from "quagga";

class Scanner extends React.Component {

	render() {
		return (
			<div id='interactive' className='viewport' >
				<video className="videoCamera __web-inspector-hide-shortcut__" autoPlay="{false}" preload="{false}" src="" playsInline="{false}" muted={true}></video>
				<canvas
					className='videoCamera __web-inspector-hide-shortcut__'
					style={{
						position: "absolute",
						right: "250px",
					}}>
				</canvas>
			</div>
		);
	}

	componentDidMount() {
		if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === "function") {
			// safely access `navigator.mediaDevices.getUserMedia`
		}
		Quagga.init({
			
			locator: {
				patchSize: "medium",
				halfSample: true
			},
			numOfWorkers: 0,
			decoder: {
				readers: [
				
					"ean_reader",
				
				]
			},
			locate: true
		}, function() {
			try{
				Quagga.start();
			}
			catch(error){
				// eslint-disable-next-line no-console
				console.log("error")
			}
			
		});
		Quagga.onDetected(this._onDetected.bind(this));
		Quagga.onProcessed(function(result) {
			const drawingCtx = Quagga.canvas.ctx.overlay;
			const drawingCanvas = Quagga.canvas.dom.overlay;

			if (result) {
				if (result.boxes) {
					drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
					result.boxes.filter(box => box !== result.box).forEach(box => {
						Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "white", lineWidth: 2});
					});
				}

				if (result.box) {
					Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "white", lineWidth: 2});
				}

				if (result.codeResult && result.codeResult.code) {
					Quagga.ImageDebug.drawPath(result.line, {x: "x", y: "y"}, drawingCtx, {color: "white", lineWidth: 3});
				}
			}
		});
	}

	componentWillUnmount() {
		Quagga.offDetected(this._onDetected.bind(this));
	}

	_onDetected(result) {
		this.props.onDetected(result);
	}
}

export default Scanner;
