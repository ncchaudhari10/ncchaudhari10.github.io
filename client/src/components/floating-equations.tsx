import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const equations = [
	{ text: "∇θJ(θ) = E[∇θ log π(a|s,θ)Q(s,a)]", x: 0.15, y: 0.10 },
	{ text: "x_t = √(ᾱ_t)x_0 + √(1-ᾱ_t)ε", x: 0.80, y: 0.25 },
	{ text: "L = E_t[||ε - ε_θ(x_t,t)||²]", x: 0.10, y: 0.45 },
	{ text: "∂L/∂θ = ∇_θ E_q[KL(q||p_θ)]", x: 0.85, y: 0.65 },
	{ text: "H(X) = -Σp(x)log p(x)", x: 0.25, y: 0.80 },
	{ text: "p(x_{t-1}|x_t,x_0) = N(μ̃_t,β̃_t I)", x: 0.70, y: 0.15 },
	{ text: "α_t = 1 - β_t, ᾱ_t = ∏_{s=1}^t α_s", x: 0.05, y: 0.65 },
	{ text: "q(x_t|x_{t-1}) = N(√(1-β_t)x_{t-1}, β_t I)", x: 0.90, y: 0.45 },
];

function getRandomDir() {
	return (Math.random() - 0.5) * 2 * 40; // px offset, -40 to 40
}

export default function FloatingEquations() {
	const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none z-1">
			{windowSize.width > 0 &&
				equations.map((equation, index) => {
					// Start position in px
					const baseX = equation.x * windowSize.width;
					const baseY = equation.y * windowSize.height;
					// Randomize float direction per equation
					const dx = getRandomDir();
					const dy = getRandomDir();
					return (
						<motion.div
							key={index}
							className="floating-equation absolute font-mono text-sm opacity-60"
							style={{ left: baseX, top: baseY, width: "max-content" }}
							animate={{
								x: [0, dx, 0],
								y: [0, dy, 0],
								opacity: [0.5, 0.8, 0.5],
							}}
							transition={{
								duration: 16 + index * 2,
								repeat: Infinity,
								ease: "easeInOut",
								delay: index * 0.8,
							}}
						>
							{equation.text}
						</motion.div>
					);
				})}
		</div>
	);
}
