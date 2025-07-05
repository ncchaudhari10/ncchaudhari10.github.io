import { motion } from "framer-motion";
import { Trophy, GraduationCap, Star } from "lucide-react";

const skillCategories = [
	{
		title: "Programming",
		skills: [
			{ name: "Python", icon: "🐍" },
			{ name: "R", icon: "📊" },
			{ name: "SQL", icon: "🗄️" },
			{ name: "JavaScript", icon: "💛" }
		]
	},
	{
		title: "ML/AI",
		skills: [
			{ name: "PyTorch", icon: "🔥" },
			{ name: "TensorFlow", icon: "🧠" },
			{ name: "Hugging Face", icon: "🤗" },
			{ name: "Scikit-learn", icon: "📈" }
		]
	},
	{
		title: "Specialized",
		skills: [
			{ name: "Diffusion Models", icon: "🌊" },
			{ name: "Transformers", icon: "🔄" },
			{ name: "GNNs", icon: "🕸️" },
			{ name: "Computer Vision", icon: "👁️" }
		]
	},
	{
		title: "Tools",
		skills: [
			{ name: "Jupyter", icon: "📓" },
			{ name: "Git", icon: "🔧" },
			{ name: "Docker", icon: "🐳" },
			{ name: "W&B", icon: "⚖️" }
		]
	},
	{
		title: "Cloud",
		skills: [
			{ name: "AWS", icon: "☁️" },
			{ name: "Azure", icon: "🔵" },
			{ name: "Google Cloud", icon: "🌩️" },
			{ name: "Kubernetes", icon: "⚙️" }
		]
	}
];

const achievements = [
	{
		title: "Smart India Hackathon Winner",
		description: "2020 National Winner for ISRO satellite nowcasting project",
		icon: Trophy
	},
	{
		title: "Khoury Research Apprenticeship",
		description: "Selected for prestigious research program at Northeastern University",
		icon: GraduationCap
	},
	{
		title: "TCS Excellence Awards",
		description: "Multiple recognitions including Star of the Month and Best Team Awards",
		icon: Star
	}
];

export default function SkillsSection() {
	return (
		<section id="skills" className="section-padding relative z-10">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold">Skills & Tech Stack</h2>
					<p className="text-xl text-cosmic-silver max-w-3xl mx-auto">
            The tools and technologies that power my research
          </p>
				</motion.div>

				<div className="grid md:grid-cols-5 gap-8 mb-16">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
							className="glass-card p-6 rounded-xl text-center"
						>
							<h3 className="text-xl font-bold text-cosmic-gold mb-6">{category.title}</h3>
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
										whileHover={{ scale: 1.05 }}
										className="flex flex-col items-center cursor-pointer"
									>
										<span className="text-3xl mb-2">{skill.icon}</span>
										<span className="text-cosmic-silver text-sm">{skill.name}</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Achievements */}
				<div>
					<motion.h3
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-3xl font-bold text-cosmic-gold mb-8 text-center"
					>
            Achievements
          </motion.h3>
					
					<div className="grid md:grid-cols-3 gap-8">
						{achievements.map((achievement, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								whileHover={{ scale: 1.05 }}
								className="glass-card p-6 rounded-xl text-center cursor-pointer"
							>
								<div className="w-16 h-16 bg-cosmic-purple rounded-full flex items-center justify-center mx-auto mb-4">
									<achievement.icon size={32} className="text-cosmic-gold" />
								</div>
								<h4 className="text-xl font-bold text-cosmic-gold mb-2">{achievement.title}</h4>
								<p className="text-cosmic-silver">{achievement.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
