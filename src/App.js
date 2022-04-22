import React from "react";
import { RecoilRoot } from "recoil";
import DetailPage from "./pages/detailPage";

const App = () => {
    return (
        <RecoilRoot>
            <div>
                <DetailPage />
            </div>
        </RecoilRoot>
    );
};

export default App;
