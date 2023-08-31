import Camera from 'react-html5-camera-photo'
import { AudioRecorder } from 'react-audio-voice-recorder'
import Webcam from 'react-webcam'

import 'react-html5-camera-photo/build/css/index.css'

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user',
}

const WebcamCapture = () => (
	<Webcam
		audio={false}
		height={720}
		screenshotFormat="image/jpeg"
		width={1280}
		videoConstraints={videoConstraints}
	>
		{({ getScreenshot }) => (
			<button
				onClick={() => {
					const imageSrc = getScreenshot()
					console.log(imageSrc)
				}}
			>
				Capture photo
			</button>
		)}
	</Webcam>
)

const MediasPage = () => {
	function handleTakePhoto(dataUri) {
		// Do stuff with the photo...
		console.log(dataUri)
	}

	const addAudioElement = (blob) => {
		const url = URL.createObjectURL(blob)
		const audio = document.createElement('audio')
		audio.src = url
		audio.controls = true
		document.body.appendChild(audio)
	}
	return (
		<>
	{/* 		<Camera
				isFullscreen={true}
				onTakePhoto={(dataUri) => {
					handleTakePhoto(dataUri)
				}}
			/>

			<WebcamCapture />

			<AudioRecorder
				onRecordingComplete={addAudioElement}
				audioTrackConstraints={{
					noiseSuppression: true,
					echoCancellation: true,
				}}
				downloadOnSavePress={true}
				downloadFileExtension="webm"
			/> */}
				<input id="file-upload" type="file"/>
		</>
	)
}


export default MediasPage
