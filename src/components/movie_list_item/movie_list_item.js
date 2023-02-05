function Movielistitem() {
    return (
        <div class="table-responsive">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>
                            <input type="number" className="eyes" defaultValue="989" />
                        </td>
                        <td>
                            <button><i className="fa fa-trash"></i></button>
                            <button><i className="fa fa-star"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Movielistitem;