using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using toujarDataAccess1;
using System.Security.Cryptography;

namespace RestApi.Controllers
{
    public class MobileController : ApiController
    {
        public IEnumerable<phone> Get()
        {
            using (bdToujjarEntities entites = new bdToujjarEntities())
            {
                return entites.phone.ToList();
            }
        }

        public HttpResponseMessage Get(int id)
        {
            using (bdToujjarEntities entites = new bdToujjarEntities())
            {
                var element = entites.phone.FirstOrDefault(e => e.idPhone == id);
                if (element != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, element);

                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "NotFound element with this id : " + id.ToString());
                }
            }
        }

        public HttpResponseMessage Post([FromBody] phone mob)
        {
            try { 
                using (bdToujjarEntities entites = new bdToujjarEntities())
                {
                    
                    entites.phone.Add(mob);
                    entites.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, mob);
                    message.Headers.Location = new Uri(Request.RequestUri + mob.idPhone.ToString());
                    return message;
                }
            }
            catch(Exception ex)
            {
               return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
  

            }
        }
    }
}
