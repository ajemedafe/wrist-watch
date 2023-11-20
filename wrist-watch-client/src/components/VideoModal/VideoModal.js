import "./VideoModal.scss";
import { useState } from "react";

function VideoModal({ video, videoClose }) {
	return (
		<>
			<div className="modal">
				<div className="modal-content">
					<iframe
						title="Video"
						width="560"
						height="315"
						src={video}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
					<button className="close" onClick={videoClose}>
						&times;
					</button>
				</div>
			</div>
		</>
	);
}

export default VideoModal;
