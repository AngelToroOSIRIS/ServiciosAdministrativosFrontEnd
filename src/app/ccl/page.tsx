import Header from "@/components/Header";
import Candidatos from "@/components/pages/Candidatos";
import fetchFn from "@/libs/fetchFn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getData = async (email: string) => {
	const response = await fetchFn(`/ccl/estado_voto?email=${email}`)
	if (response.error || response.code !== 200) {
		return redirect("/votaciones?error=server")
	}
	if (response.data.estado === "1") {
		return redirect("/votaciones?error=e_ccl")
	}

	const candidatos = await fetchFn(`/ccl/candidatos`);
	return candidatos.data
};

export default async function CclPage() {
	const session = await getServerSession();
	let candidatos;
	if (session) {
		candidatos = await getData(session && session.user?.email ? session.user.email : "")
	} else {
		return redirect("/votaciones");
	}
	return (
		<main>
			<Header />
			<div className="mt-[90px] justify-center text-center">
				<h1 className=" text-3xl text-primary font-bold">
					Votación Comité de Convivencia Laboral
				</h1>
				<div className="justify-center m-8 ">
					<p></p>
					<p className="text-lg">
						Bienvenido a la <b>Votación de Comité de Convivencia Laboral</b> ,
						recuerde que solo tiene un intento de votación, debe escoger una
						opcin y darle en el botón <b>Enviar Voto</b>
					</p>
				</div>
			</div>
			<Candidatos
				candidatos={candidatos}
				cantidad_votos={1}
				titulo="Votacion CCL"
				url_votacion="ccl"
			/>
		</main>
	);
}
