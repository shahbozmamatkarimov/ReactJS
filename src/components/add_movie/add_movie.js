function AddMovie(){
    return (
        <div>
            <h1>Yangi kino qo'shish</h1>
            <form className="form">
                <input type="text" className="w-50 p-1" placeholder="Kino nomi..."/>
                <input type="number" className="w-25 p-1" placeholder="necha marta ko'rilgan..."/>
                <input type="submit" className="btn btn-outline-dark w-25" value="Qo'shish" />
            </form>
        </div>
    )
}

export default AddMovie