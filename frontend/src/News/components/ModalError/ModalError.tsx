import "./ModalError.css";

type AppProps = {
    error: string,
    setError: (_type: string) => void
}

const ModalError = ({error, setError}: AppProps) => {
    return (
        <div className="d-flex align-items-center m-5">
            <div className="modal m-5"  tabIndex={-1} style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Error</h5>
                            <button type="button" className="btn-close bg-danger" onClick={(event) => {
                            setError("");
                        }} aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-5">
                        <div className="d-flex justify-content-center">
                            <h4>{error}</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default ModalError;