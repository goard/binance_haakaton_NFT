import { useState, useEffect } from "react";
import { connect } from "react-redux";
import detectEthereumProvider from "@metamask/detect-provider";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import SimpleBackdrop from "./Backdrop";
import { loginAndCreateBucket } from "../../redux/actions/hub";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const MainLayout = (props) => {
  const { title, loginAndCreateBucket, children } = props;
  const classes = useStyles();

  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [stateChainId, setStateChainId] = useState(null);

  const loadWeb3 = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      startApp(provider);
    } else {
      window.alert(
        "Metamask not detected! Install Metamask plugin to proceed: https://metamask.io/download.html"
      );
    }
  };

  const startApp = async (provider) => {
    if (provider !== window.ethereum) {
      console.error("Do you have multiple wallets installed?");
    }
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    setStateChainId(chainId);
    console.log(chainId);
    handleChainChanged(chainId);

    if (chainId === "0x61") {
    }
  };

  const handleChainChanged = (_chainId) => {
    // We recommend reloading the page, unless you must do otherwise
    // window.location.reload();
  };

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      // Do any other work!
    }
  }

  const connect = (loginAndCreateBucket) => {
    window.ethereum.request({ method: "eth_requestAccounts" });
    // .then(handleAccountsChanged)
    // .catch((err) => {
    //   if (err.code === 4001) {
    //     // EIP-1193 userRejectedRequest error
    //     // If this happens, the user rejected the connection request.
    //     console.log("Please connect to MetaMask.");
    //   } else {
    //     console.error(err);
    //   }
    // });
    loginAndCreateBucket();
  };
  // window.ethereum
  //   .request({ method: "eth_accounts" })
  //   .then(handleAccountsChanged)
  //   .catch((err) => {
  //     // Some unexpected error.
  //     // For backwards compatibility reasons, if no accounts are available,
  //     // eth_accounts will return an empty array.
  //     console.error(err);
  //   });
  // window.ethereum.on("chainChanged", handleChainChanged);

  useEffect(() => {
    loadWeb3();
    return () => {
      loadWeb3();
    };
  }, [currentAccount, stateChainId]);

  return (
    <div className={classes.root}>
      <TopBar
        loadWeb3={connect}
        loginAndCreateBucket={loginAndCreateBucket}
        setOpenBackDrop={setOpenBackDrop}
      />
      <SimpleBackdrop open={openBackDrop} title={title} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          {stateChainId === "0x61" ? (
            <div className={classes.content}>{children}</div>
          ) : (
            "Выберите тестовую сеть Binance Smart Chain и обновите страницу"
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bucket: state.app.bucket,
  title: state.app.title,
});

const mapDispatchToProps = (dispatch) => ({
  loginAndCreateBucket: () => dispatch(loginAndCreateBucket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
