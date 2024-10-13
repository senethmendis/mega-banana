import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const navigation = (link) => navigate(link);

module.exports = navigation;
