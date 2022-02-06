import "./Loading.css";

const Loading = () => {
    return (
        <div className="d-flex align-items-center m-5">
            <div className="modal m-5"  tabIndex={-1} style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Loading</h5>
                        </div>
                        <div className="modal-body p-5">
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                    <span className="visually-hidden"></span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Loading;