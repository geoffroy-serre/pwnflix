import Ping from 'ping-url';

export const pingBackEnd = () => {
	Ping.check('http://localhost').then(
		(res) => {
			return res.status;
		},
		(res) => {
			console.log(`error msg: ${res.status} ${res.msg}`);
		}
	);
};
