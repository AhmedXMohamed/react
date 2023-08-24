import { useLoaderData, useNavigation } from "react-router-dom";

export const Data = () => {
    const dogUrl = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return (
            <h1> Loading... </h1>
        );
    }

    return (
        <div>
            <h1>Some images don't work so you should reload the pages a few times if you can't see it.</h1>
            <br />
            <img src={dogUrl} alt="Dog image, allow images for this webpage to see the image." />
        </div>
    );
}

export const DataLoader = async () => {
    const res = await fetch("https://random.dog/woof.json");
    const dog = await res.json();

    return dog.url;
}

export default Data;
