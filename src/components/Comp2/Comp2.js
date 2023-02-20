import React, { useEffect, useState, useRef } from "react";
import "./Comp2.css";

const Comp2 = () => {
	const el1 = useRef();

	const [scrollY, setScrollY] = useState(0); // this state is realistically not needed
	const [clientHeight, setClientHeight] = useState(0);
	const [elementPositionAwayFromTop, setElementPositionAwayFromTop] =
		useState(0);

	function handleScroll() {
		const scrollPosition = window.scrollY;
		// console.log("scrollPosition: ", scrollPosition);
		setScrollY(scrollPosition);

		let position = el1.current.getBoundingClientRect();
		// console.log("position: ", position);
		setElementPositionAwayFromTop(position.y);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { once: true });
	});

	useEffect(() => {
		let viewHeight = window.innerHeight;
		setClientHeight(viewHeight);
	}, []);

	useEffect(() => {
		console.log("elementPositionAwayFromTop", elementPositionAwayFromTop);
	}, [elementPositionAwayFromTop]);

	return (
		<div className="Comp2">
			<h1>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur beatae
				quibusdam neque eum. Impedit, consequuntur suscipit modi quis harum
				sapiente officiis eaque distinctio, non corrupti at velit maxime eius
				cumque, hic qui voluptate blanditiis molestias doloremque nesciunt!
				Eaque tempora ipsum autem quidem aliquid fuga ut quasi soluta, inventore
				provident dolore quisquam nesciunt quia obcaecati ducimus eius eum,
				repellat quaerat sit nam? Voluptatum atque iste optio repudiandae nemo
				consequatur quisquam minus vero sapiente libero reiciendis, sed saepe?
				Ad, corrupti facilis laudantium repudiandae aliquam eos quis sunt illum
				sit, odit ut eligendi minima! Laboriosam quis dicta assumenda recusandae
				aperiam, minus quisquam facilis cupiditate corrupti suscipit eveniet
				doloribus ab ex minima cum nemo deserunt perspiciatis temporibus,
				doloremque quo dolorem saepe necessitatibus magni? Aspernatur
				praesentium, eos voluptatem ipsum unde perferendis delectus sint debitis
				inventore placeat modi laudantium explicabo? Corrupti aliquid temporibus
				voluptatibus officia dolorum nulla, non cumque consequuntur porro
				debitis veritatis corporis modi eos doloremque dolorem ullam facilis
				nostrum assumenda similique quas. Voluptatibus at quidem vero non
				voluptates voluptate velit deserunt totam dolores maxime quod debitis
				expedita, suscipit architecto quas facere perferendis natus! Commodi
				voluptatibus architecto ea nulla magnam officia quae ex tenetur. Ad eos
				amet et explicabo eaque omnis tempore recusandae ullam doloremque.
			</h1>
			<h1>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur beatae
				quibusdam neque eum. Impedit, consequuntur suscipit modi quis harum
				sapiente officiis eaque distinctio, non corrupti at velit maxime eius
				cumque, hic qui voluptate blanditiis molestias doloremque nesciunt!
				Eaque tempora ipsum autem quidem aliquid fuga ut quasi soluta, inventore
				provident dolore quisquam nesciunt quia obcaecati ducimus eius eum,
				repellat quaerat sit nam? Voluptatum atque iste optio repudiandae nemo
				consequatur quisquam minus vero sapiente libero reiciendis, sed saepe?
				Ad, corrupti facilis laudantium repudiandae aliquam eos quis sunt illum
				sit, odit ut eligendi minima! Laboriosam quis dicta assumenda recusandae
				aperiam, minus quisquam facilis cupiditate corrupti suscipit eveniet
				doloribus ab ex minima cum nemo deserunt perspiciatis temporibus,
				doloremque quo dolorem saepe necessitatibus magni? Aspernatur
				praesentium, eos voluptatem ipsum unde perferendis delectus sint debitis
				inventore placeat modi laudantium explicabo? Corrupti aliquid temporibus
				voluptatibus officia dolorum nulla, non cumque consequuntur porro
				debitis veritatis corporis modi eos doloremque dolorem ullam facilis
				nostrum assumenda similique quas. Voluptatibus at quidem vero non
				voluptates voluptate velit deserunt totam dolores maxime quod debitis
				expedita, suscipit architecto quas facere perferendis natus! Commodi
				voluptatibus architecto ea nulla magnam officia quae ex tenetur. Ad eos
				amet et explicabo eaque omnis tempore recusandae ullam doloremque.
			</h1>

			<div
				className={
					elementPositionAwayFromTop <= clientHeight * 0.5
						? "myElement isVisible"
						: "myElement"
				}
				ref={el1}
			>
				<h1>is this visible, and in the middle of screen</h1>
			</div>

			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero,
				dignissimos ipsum explicabo expedita saepe fugiat, quidem aliquid illum
				voluptas at? Necessitatibus veritatis quo labore, atque alias veniam?
				Accusantium beatae illo sequi vitae nostrum veniam minima, cum saepe
				distinctio molestias quia quibusdam optio, magni qui eos, laudantium at
				vel voluptate consequatur dolores fugit! Recusandae repellendus
				obcaecati perferendis maxime? Voluptas tempora aut facilis, fugit ex,
				quidem ratione eos reprehenderit error eius neque reiciendis a adipisci.
				Mollitia doloremque illum eius asperiores modi ipsum adipisci officia
				rerum, iure magni ea tempore dolores repellendus omnis velit saepe
				nulla, repudiandae explicabo tenetur ipsa eaque aspernatur corrupti.
				Mollitia quod quibusdam exercitationem sint libero dicta veniam, nostrum
				tempora accusamus debitis ullam placeat, soluta id. Autem obcaecati
				voluptatem corrupti soluta rem voluptas delectus aspernatur dicta?
				Dignissimos ipsum consequatur id, natus sint magni at cupiditate vero,
				consequuntur adipisci blanditiis. Quidem sapiente accusamus, voluptates
				molestiae repellat, ratione vero corrupti sequi a architecto natus!
				Ipsum voluptate beatae suscipit minus inventore! Fugiat necessitatibus
				voluptatum exercitationem magni facilis quos alias, suscipit in
				consequatur placeat quaerat voluptates! Temporibus, odio consectetur
				voluptate ullam explicabo quo neque? Reprehenderit distinctio,
				perferendis facilis saepe suscipit ducimus quod beatae eaque
				necessitatibus quae repellendus mollitia sequi, corrupti sunt veniam
				voluptas, ullam quis velit enim adipisci? Necessitatibus porro in id
				quasi consectetur deserunt praesentium, ea totam tempore soluta eius
				laboriosam tempora sint, et ullam impedit ex aliquam nobis commodi
				exercitationem odio! Porro possimus quae, ratione vel similique facere
				laboriosam praesentium nihil labore. Doloribus fugit laudantium dolores
				inventore minima recusandae provident odit, neque deserunt quisquam.
				Voluptas hic dignissimos cum assumenda a delectus, cumque ad accusamus
				non est tenetur quasi modi esse rem fugiat nesciunt reiciendis ex
				laboriosam eveniet pariatur veritatis omnis asperiores totam. Inventore
				quod, nobis quidem mollitia vero molestias cum corporis vel aliquam
				labore, incidunt saepe non enim, doloribus praesentium necessitatibus?
			</h1>
		</div>
	);
};

export default Comp2;
