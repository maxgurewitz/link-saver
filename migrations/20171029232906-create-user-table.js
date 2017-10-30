exports.up = function(db) {
  return db.createTable('users', {
    id: { type: 'int', primaryKey: true },
    email: 'string',
    passwordHash: 'string',
    createdAt: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP')
    }
  });
};

exports.down = function(db) {
  return db.dropTable('users');
};
