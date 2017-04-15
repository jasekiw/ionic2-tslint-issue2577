export const Routes = {
  AUTH: {
    LOGIN_URL:        "auth/login",
    REGISTER:         "auth/register",
    REFRESH_TOKEN:    "auth/refresh-token",
    FORGOT_PASSWORD:  "forgot-password",
    ADD_PUSH_TOKEN: "auth/push-token",
    REMOVE_PUSH_TOKEN: "auth/push-token",
  },
  NOTIFICATIONS: {
    ITEM:  'notifications/{type}',
    INDEX: 'notifications'
  },
  QUESTIONS:        'questions',
  QUESTIONNAIRES:   'questionnaires',
  SUBMISSIONS:      'questionnaire-submissions',
  QUESTION_ANSWERS: 'question-answers',
  USER_DETAILS:     'user/{id}',
  DETAILS_STORE:    'details-store',
  USERS:            'users',
  USER_ACCOUNT:     'user-account',
  QUESTIONNAIRE_SUBMISSIONS:'questionnaire-submissions',
  QUOTES:           {
    INDEX: "quotes",
    SHOW:  'quotes/{id}'
  },
  QUOTE_OF_THE_DAY: 'quotes/quote-of-the-day'
};
