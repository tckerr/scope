from django.db import connections, OperationalError


def database_is_up():
    db_conn = connections['default']
    try:
        _ = db_conn.cursor()
    except OperationalError:
        return False
    else:
        return True
