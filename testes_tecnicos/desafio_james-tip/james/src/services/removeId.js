export const removeId = (obj) => {
	for (var i = 0; i < obj.length; i++) {
		delete obj[i].id;
	}
    return obj
};
