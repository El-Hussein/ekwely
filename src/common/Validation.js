const validateUserName = (userName) => {
  console.log('userName: ' + userName);
  if (userName.length === 0) {
    return 'هذا الحقل مطلوب';
  } else {
    return null;
  }
};

const validateEmail = (email) => {
  console.log('email: ' + email);
  if (email.length === 0) {
    return 'هذا الحقل مطلوب';
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      String(email).toLowerCase(),
    )
  ) {
    return 'البريد الالكتروني غير صحيح';
  } else {
    return null;
  }
};

const validatePhone = (phone) => {
  console.log('phone: ' + phone);

  if (phone.length === 0) {
    return 'هذا الحقل مطلوب';
  } else if (phone.length < 11) {
    return 'رقم الهاتف غير صحيح';
  } else {
    return null;
  }
};

const validatePasswordAndConfirm = (password, passwordConfirm) => {
  console.log('password: ' + password + 'passwordConfirm: ' + passwordConfirm);
  return password != passwordConfirm ? 'رمز المرور غير متطابق' : null;
};

const validatePassword = (password) => {
  console.log('password: ' + password);

  if (password.length === 0) {
    return 'هذا الحقل مطلوب';
  } else if (password.length < 6) {
    return 'يجب الا يقل رمز المرور عن 6 احرف';
  } else {
    return null;
  }
};

const validatePasswordConfirm = (passwordConfirm) => {
  console.log('passwordConfirm: ' + passwordConfirm);

  if (passwordConfirm.length === 0) {
    return 'هذا الحقل مطلوب';
  } else if (passwordConfirm.length < 6) {
    return 'يجب الا يقل رمز المرور عن 6 احرف';
  } else {
    return null;
  }
};

export {
  validateUserName,
  validateEmail,
  validatePhone,
  validatePassword,
  validatePasswordAndConfirm,
  validatePasswordConfirm,
};
