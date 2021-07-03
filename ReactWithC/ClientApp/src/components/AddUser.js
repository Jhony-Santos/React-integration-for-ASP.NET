import React, { Component } from 'react';

export class User {
    constructor() {
        this.id = 0;
        this.role = "";
    }
}

export class AddProduto extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", user: new User(), loading: true };
        this.intialize();

        this.handleSalve = this.handleSalve.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async intialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('api/User/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", produto: data, loading: false });
        }
        else {

            this.state = { title: "Create", produto: new Produto(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Produto</h3>
                {contents}
            </div>
        );
    }


    handleSalve(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.produto.id) {
            const response1 = fetch('api/User/' + this.state.user.id, { method: 'PUT', body: data });
            this.props.history.push('/fetch-user');
        }
        else {
            const response2 = fetch('api/User/', { method: 'POST', body: data });
            this.props.history.push('/fetch-user');
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/fetch-user');
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSalve}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.user.id} />
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" name="role" defaultValue={this.state.user.role} required />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success" value={this.state.user.id}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cencelar</button>
                </div>
            </form>

        );
    }

}


