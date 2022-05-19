import { useNavigate } from 'react-router-dom';
import { authorizedStatus } from './authorizedStatus';

const PrivateRouter = ({ children: Component }) => {
    const navigate = useNavigate();

    (async () => {
        const result = await authorizedStatus();
        if (result) {
            navigate(result, { replace: true });
        }
    })();

    return Component;
};

export default PrivateRouter;
