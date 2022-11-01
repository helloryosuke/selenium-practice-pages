import { useRouter } from "next/router";

const Success = () => {

    const router = useRouter();
    const query = router.query;

    return (
        <>
            <div style={{padding: 10, marginLeft: 10}}>
                <h1>Success!</h1>
                <p>Name: {query.name}</p>
                <p>Title: {query.title}</p>
                <p>Comment: {query.comment}</p>
            </div>
        </>
    )

}

export default Success;