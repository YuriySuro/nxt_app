const Footer = () => {
    return (
        <footer className="py-5 bg-dark footer">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
            </div>
            <style jsx>
                {`
                    .footer {
                        margin-top: 20px;
                        width: 100%;
                        position: fixed;
                        bottom: 0;
                        left: 0;
                    }
                `}
            </style>
        </footer>
    );
}

export default Footer;