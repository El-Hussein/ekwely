const validateUserName = (userName) => {
  if (!userName || userName.length === 0) {
    return 'هذا الحقل مطلوب';
  } else {
    return null;
  }
};

const validateEmail = (email) => {
  if (!email || email.length === 0) {
    return 'هذا الحقل مطلوب';
    // } else if (
    //   !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    //     String(email).toLowerCase(),
    //   )
    // ) {
    // return 'البريد الالكتروني غير صحيح';
  } else {
    return null;
  }
};

const validatePhone = (phone) => {
  var phoneno = /^\d{11}$/;
  if (!phone || phone.length === 0) {
    return 'هذا الحقل مطلوب';
  } else if (!phone.match(phoneno)) {
    return 'رقم الهاتف غير صحيح';
  } else {
    return null;
  }
};

const validatePasswordAndConfirm = (password, passwordConfirm) => {
  return password != passwordConfirm ? 'رمز المرور غير متطابق' : null;
};

const validatePassword = (password) => {
  if (password.length === 0) {
    return 'هذا الحقل مطلوب';
  } else if (password.length < 6) {
    return 'يجب الا يقل رمز المرور عن 6 احرف';
  } else {
    return null;
  }
};

const validatePasswordConfirm = (passwordConfirm) => {
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
