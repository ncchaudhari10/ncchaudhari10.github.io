import { motion } from "framer-motion";
import { Brain, Microscope, TrendingUp, Server, CloudRain, Shield } from "lucide-react";

const timelineData = [
	{
		role: "AI Research Scientist",
		company: "Institute for Experiential AI, Northeastern",
		period: "April 2025 - Present",
		description:
			"Developing generative AI models for enzyme design using diffusion and flow matching. Processing large-scale 3D protein data with RFdiffusion, AlphaFold, and ProteinMPNN.",
		tags: ["Diffusion Models", "Protein Design", "GNNs"],
		icon: Brain,
		side: "left",
	},
	{
		role: "Research Apprenticeship",
		company: "Khoury College of Computer Sciences",
		period: "January 2025 - April 2025",
		description:
			"Built sequence-to-structure pipelines using RFdiffusion and AlphaFold. Applied 3D diffusion models for functional enzyme design.",
		tags: ["RFdiffusion", "AlphaFold", "3D Models"],
		icon: Microscope,
		side: "right",
	},
	{
		role: "Data Scientist",
		company: "MFS Investment Management",
		period: "June 2024 - December 2024",
		description:
			"Deployed NLP applications with OpenAI API for meeting quality analysis. Implemented Informer Transformer achieving r² = 0.58 for redemption prediction.",
		tags: ["NLP", "Transformers", "r² = 0.58"],
		icon: TrendingUp,
		side: "left",
	},
	{
		role: "Full Stack Data Scientist",
		company: "Tata Consultancy Services",
		period: "August 2020 - August 2023",
		description:
			"Executed A/B testing to refine product features and elevate user engagement in the rollout of Single Sign-On (SSO) across 100+ products. Integrated advanced SQL in ETL pipelines for thorough data collection and harnessed Power BI for impactful visualizations.",
		tags: ["Python", "A/B testing", "Software Development", "Statistical Analysis"],
		icon: Server,
		side: "right",
	},
	{
		role: "Data Scientist",
		company: "Indian Institute of Tropical Meteorology",
		period: "June 2019 - April 2020",
		description:
			"Developed and implemented DeepSD, a deep learning based statistical downscaling model for generating high resolution maps of precipitation over India.",
		tags: ["Deep Learning", "CNN", "ρ = 0.86"],
		icon: CloudRain,
		side: "left",
	},
	{
		role: "Software Engineer Intern",
		company: "EnfiniLabs Tech Consultant",
		period: "December 2018 - January 2019",
		description:
			"Blueprinted and drove the construction of a security layer for existing applications, incorporating JSON Web Token and Auth0.",
		tags: ["Security", "JWT", "Auth0"],
		icon: Shield,
		side: "right",
	},
];

export default function JourneyTimeline() {
	return (
		<section id="journey" className="section-padding relative z-10">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold">
						Professional Journey
					</h2>
					<p className="text-xl text-cosmic-silver max-w-3xl mx-auto">
						More of my credentials in AI research and data science across
						academia and industry
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline Line */}
					<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 timeline-line transform md:-translate-x-1/2"></div>

					{/* Timeline Items */}
					<div className="space-y-12">
						{timelineData.map((item, index) => (
							<motion.div
								key={index}
								initial={{
									opacity: 0,
									x: item.side === "left" ? -50 : 50,
								}}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className={`relative flex flex-col md:flex-row md:items-center ${
									item.side === "right" ? "md:flex-row-reverse" : ""
								}`}
							>
								<div
									className={`md:w-1/2 ${
										item.side === "left" ? "md:pr-8" : "md:pl-8"
									}`}
								>
									<div className="glass-card p-6 rounded-xl ml-16 md:ml-0 hover:transform hover:scale-105 transition-all duration-300">
										<div className="flex items-center mb-4">
											<div className="w-12 h-12 bg-cosmic-purple rounded-full flex items-center justify-center mr-4">
												<item.icon size={24} className="text-cosmic-gold" />
											</div>
											<div>
												<h3 className="text-xl font-bold text-cosmic-gold">
													{item.role}
												</h3>
												<p className="text-cosmic-silver">
													{item.company}
												</p>
												<p className="text-sm text-cosmic-silver opacity-75">
													{item.period}
												</p>
											</div>
										</div>
										<p className="text-cosmic-silver leading-relaxed mb-4">
											{item.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{item.tags.map((tag, tagIndex) => (
												<span
													key={tagIndex}
													className="px-3 py-1 bg-cosmic-purple rounded-full text-xs text-cosmic-silver"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>

								{/* Timeline Dot */}
								<div className="absolute left-6 md:left-1/2 w-4 h-4 bg-cosmic-gold rounded-full transform md:-translate-x-2 z-10 border-4 border-cosmic-dark"></div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
