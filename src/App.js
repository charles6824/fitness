import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Loadable from "react-loadable";
import PreLoader from "./components/Preloader";
import Header from "./components/Header";

const HomePage = Loadable({
	loader: () => import("./pages/HomePage"),
	loading: PreLoader,
});

const LoginPage = Loadable({
	loader: () => import("./pages/Signin"),
	loading: PreLoader,
});

const RegisterPage = Loadable({
	loader: () => import("./pages/Signup"),
	loading: PreLoader,
});

const ProfilePage = Loadable({
	loader: () => import("./pages/ProfilePage"),
	loading: PreLoader,
});

const UserListPage = Loadable({
	loader: () => import("./pages/Admin/UserListPage"),
	loading: PreLoader,
});

const IssueListPage = Loadable({
	loader: () => import("./pages/Admin/IssueListPage"),
	loading: PreLoader,
});

const SearchPage = Loadable({
	loader: () => import("./pages/SearchPage"),
	loading: PreLoader,
});

const AboutPage = Loadable({
	loader: () => import("./pages/AboutPage.jsx"),
	loading: PreLoader,
});

const ContactPage = Loadable({
	loader: () => import("./pages/ContactPage"),
	loading: PreLoader,
});

const TermsPage = Loadable({
	loader: () => import("./pages/TermsPage"),
	loading: PreLoader,
});

const App = () => {
	return (
		<Router>
			<Header />
			<main className="main-section">
				<Suspense fallback={<PreLoader />}>
					<Routes>
						<Route exact
							path="/terms-and-conditions"
							element={<TermsPage />}
						/>
						<Route exact path="/profile" element={<ProfilePage />} />
						<Route exact path="/register" element={<RegisterPage />} />
						<Route exact path="/sign-in" element={<LoginPage />} />
						<Route exact
							path="/admin/issues"
							element={<IssueListPage />}
						/>
						<Route
							path="/admin/issues/:pageNumber"
							element={<IssueListPage />}
							exact
						/>
						<Route
							path="/admin/users"
							exact
							element={<UserListPage />}
						/>
						<Route
							path="/admin/users/:pageNumber"
							element={<UserListPage />}
							exact
						/>
						<Route exact path="/search" element={SearchPage} />
						<Route
							path="/search/:keyword"
							element={<SearchPage />}
							exact
						/>
						<Route
							path="/search/:keyword/page/:pageNumber"
							element={<SearchPage />}
							exact
						/>
						<Route exact path="/contact" element={<ContactPage />} />
						<Route exact path="/about" element={<AboutPage />} />
						<Route exact path="/" element={<HomePage />} />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
};

export default App;
