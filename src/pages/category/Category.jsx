import { useParams, useNavigate } from "react-router";
import { Container, Button } from "react-bootstrap";

function Category() {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/");
    }

    return (
        <Container className="text-center py-4">
            <h1>Catégorie : {categoryId}</h1>
            <Button variant="primary" className="mt-3" onClick={handleReturn}>
                Retour à la page d’accueil
            </Button>
        </Container>
    );
}

export default Category;