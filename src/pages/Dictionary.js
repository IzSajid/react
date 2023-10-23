import DefinationSearch from '../components/DefinationSearch';
export default function Dictionary() {

    return ( 
        <>
        <div className="flex justify-center items-center flex-col" style={{ width: "50%", margin: "0 auto", height: "100vh", display: "flex", alignItems: "center", paddingTop: "50px", paddingBottom: "50px" }}>
        <h2 className="text-2xl font-bold">Word search:</h2>
        <DefinationSearch/>
        </div>
        </>
    );
}