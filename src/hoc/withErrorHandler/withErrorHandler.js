
import Aux from "../Auxx/Auxx";
import Modal from "../../components/Ul/Modal/Modal";

const withErrorHandler = (WrappedComponent,instance) => {

  return class extends WrappedComponent {
    
    constructor() {
      super();
      this.reqInterceptor = instance.interceptors.request.use((req) => {
        this.setState({ error : null });
        return req;
      });

      this.resInterceptor = instance.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          this.setState({ error: error });
          return error;
        }               
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    
    };

    componentWillUnmount() {
      if(this.reqInterceptor){
        instance.interceptors.request.eject(this.reqInterceptor)
        instance.interceptors.response.eject(this.resInterceptor)

      }
    }


    render() {


      return (
        <Aux>
          <WrappedComponent {...this.props} />
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            <h3 style={{ color: "red", textAlign: "center" }}>
              {this.state.error ? this.state.error.message : null}
            </h3>
          </Modal>
        </Aux>
      );
    }
  };
};

export default withErrorHandler;


