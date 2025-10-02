import Image from "next/image";

export const Home = () => {
	return (
		<div className="center flex-col">
			<p className="text-4xl font-bold">DCL</p>
			<Image
				src="/page/home/hi.JPG"
				className="rounded w-80 h-96"
				fetchPriority="high"
				priority
				alt="hi"
				width={600}
				height={700}
			/>
		</div>
	);
};
