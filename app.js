class App extends React.Component {
    render()  {
        return ( 
            <>
            <div className="container"></div>
                <div className="row">
                    <div className="col-12">
                        Body
                    </div>
                </div>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))