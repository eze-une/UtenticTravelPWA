import React from "react";
import "./Testimonials.css";
import matrip from "../matrip.jpg";
import outdoor from "../outdoor.jpg";
import gora from "../gora.jpg";

function Testimonials() {
	return (
		<div className="testimonials-container">
			<div className="testimonials-titles">
				<h1>You're in great company.</h1>
				<p>See what our users say about us.</p>
			</div>

			<div className="testimonials-cards">

				<div className="testimonial-container">
					<div className="testimonial">
						<img
							src={matrip}
							className="testimonial-icon
                        "
						/>
						<h3>Ma Trip</h3>
						<div>
							<p>
								I admire your work, and the way you collaborate with the
								organizers and assist them in finding people is great.
							</p>
						</div>
					</div>

					<div className="testimonial-container">
						<div className="testimonial">
							<img src={outdoor} className="testimonial-icon" />
							<h3>Outdoor Ethiopia</h3>
							<div>
								<p>
									You are doing a great job by being a one-stop platform for
									interested travelers. Keep it up!
								</p>
							</div>
						</div>
					</div>

					<div className="testimonial-container">
						<div className="testimonial">
							<img src={gora} className="testimonial-icon" />
							<h3>Gora Hiking</h3>
							<div>
								<p>Make it big and rule the tourism industry!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
