import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchUser extends Component {
    static displayName = "User";

    constructor() {
        super();
        this.state = { user: [], loading: true }
    }

    componentDidMount() {
        this.populaUserData();
    }

    static handleEdit(id) {
        window.location.href = "/user/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Vai deletar este usuário mesmo Osvaldo e Jhonatan : " + id)) {
            return;
        }
        else {
            fetch('api/user/' + id, { method: 'delete' })
                .then(json => {
                    window.location.href = "fetch-user";
                    alert('Deletado!');
                })
        }
    }

    static renderUserTabela(user) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Amigos</th>
                        <th>Roles</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(prod =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.role}</td>

                            <td>
                                <button className="btn btn-success" onClick={(id) => this.handleEdit(user.id)}>Edit</button> &nbsp;
                                  <button className="btn btn-danger" onClick={(id) => this.handleDelete(user.id)}>Delete</button>
                            </td>

                        </tr>

                    )}
                </tbody>
            </table>
        );

    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em> </p>
            : FetchUser.renderUserTabela(this.state.user);

        return (
            <div>
                <h1 id="tabelLabel" >Users</h1>
                <p>Listando todos os usuários</p>
                <p>
                    <Link to="/add-user">Cadastrar Usuário</Link>
                </p>
                {contents}
            </div>
        );
    }


    async populaUserData() {
        const response = await fetch('api/Produtos');
        const data = await response.json();
        this.setState({ user: data, loading: false });
    }

}