import { useRouter } from "next/router";

const SobreItem = ()=> {

    const router = useRouter();
    const { slug } = router.query

    return(
        <h1>Sobre {slug}</h1>
    )
}

export default SobreItem;