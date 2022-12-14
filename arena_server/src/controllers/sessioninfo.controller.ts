import { Get, Request, Route, Security, Tags } from 'tsoa';
import { Container, Inject } from 'typedi';

import { IUser } from '../config/passport';
import DbService from '../services/db.service';

type SessionInfoResponse = { username?: string; name?: string | null; ip: string; dbname: string };

@Route('/api/sessioninfo')
export default class SessionInfoController {
  @Inject()
  private dbService: DbService = Container.get(DbService);

  /**
   * Returns generic information on session
   * @summary Returns session information
   * @returns The user, database, ip information.
   */
  @Get('/')
  @Tags('Diagnostic')
  @Security({ basic: [] })
  public async getSessionInfo(@Request() req: any): Promise<SessionInfoResponse> {
    const user: IUser = req.user;
    return {
      username: user?.username,
      name: user?.name,
      ip: req.res.locals.clientip,
      dbname: this.dbService?.databaseName,
    };
  }
}
